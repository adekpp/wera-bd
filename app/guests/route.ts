import prisma from "../../lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await prisma.name.findMany();
    console.log(res)
    return NextResponse.json(res)
  } catch (e) {
    console.log(e);
  }
}

export async function POST(req: Request) {
    const {name}  = await req.json()
    try{
      const res = await prisma.name.create({
        data: { 
          name: name
         }
      })
      return NextResponse.json(res)
    }catch(e){
      console.log(e)
    }
  
  }
