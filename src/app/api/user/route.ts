import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';
import { cookies } from "next/headers";

type ResponseData = {
  userId: string
}

export async function GET(  
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const secret = process.env.AUTH_SECRET??""

    const token = await getToken({ req, secret });

    if (token != null) {

        let tokenId = token.id === undefined ? "" : token.id as string;

        cookies().set("userId", tokenId);

        return NextResponse.json({
            status: 200,
            userId: token.id
        })
    } else {
        return NextResponse.json({
            status: 400
        })
    } 
}