"use client";

import Page from "@/src/app/components/template/Page";
import PageTitle from "@/src/app/components/template/PageTitle";
import { IconCloudUpload } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";

export default function AccountPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!file) {
      alert("Selecione o arquivo que deseja carregar");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", file ?? "");

    const responseUser = await fetch('/api/user', { 
      method: 'GET',
      body: null
    });

    const dataUser = await responseUser.json();
    console.log(dataUser);

    if (dataUser.status === 200) {

      formData.append("userId", dataUser.userId);

      try {
        const response = await fetch(
          `${process.env.INTERNAL_API_HOST??"http://localhost:5000"}/invoice/upload`,
          {
            method: "POST",
            body: formData,
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Cache-Control': 'no-store',
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.log(errorText);

          throw new Error("Não foi possível se conectar ao servidor");
        }

        if (response.status === 404 || response.status === 500) {
            alert("Estamos com problemas, tente novamente mais tarde");
            setIsLoading(false);
            window.location.reload();
            return;
        }

        const body = await response.json();
        alert("Imagem carregada com sucesso!");
        setIsLoading(false);
        window.location.reload();

      } catch(err) {
        alert(err);
      }
    } else {
      alert("Usuário não encontrado")
    }
  };

  return (
    <Page className="flex flex-col gap-4">
      <PageTitle
        icon={IconCloudUpload}
        mainTitle="Carregar arquivo"
        underTitle="Carregue suas faturas aqui"
      />

      <div className="items-center">
        <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl">
          <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 space-y-2">
              <div className="flex flex-col items-center justify-between">
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              {preview ? (
                <div className="col-span-6 sm:col-span-4 shadow">
                  <Image
                    src={preview}
                    alt="Preview Image"
                    width="1000"
                    height="100"
                    className="object-cover w-full h-[250px]"
                  />
                </div>
              ) : (
                <div className="col-span-6 sm:col-span-4 shadow">
                  <Image
                    src="data:image/png;base64,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"
                    alt="Image"
                    width="1000"
                    height="100"
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="p-2 w-full flex justify-center bg-blue-500 text-gray-100 rounded-full tracking-wide
                font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Upload
            </button>
          </form>
          {isLoading && `Carregando...`}
        </div>
      </div>
    </Page>
  );
}
