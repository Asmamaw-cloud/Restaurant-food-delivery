// import { PrismaClient } from "@prisma/client"
// import { NextResponse } from "next/server"


// const prisma = new PrismaClient()

// // FETCH CATEGORIES
// export const GET = async () => {

//     try {
//         const categories = await prisma.category.findMany()
//         return new NextResponse(JSON.stringify({ categories }), { status: 200 })

//     } catch (error) {
//         console.log(error)
//         return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
//     }
// }

// export const POST = () => {
//     return new NextResponse("Hello", { status: 200 })
// }


// import { prisma } from "@/utils/connect"
// import { NextRequest, NextResponse } from "next/server"


// export const GET = async (req:NextRequest) => {

//     const {searchParams} = new URL(req.url)
//     const cat = searchParams.get("cat")

//     try {
//         const products = await prisma.product.findMany({
//             where: {
//                 ...(cat ? {catSlug: cat} : {isFeatured: true})
//             }
//         })
//         return NextResponse.json({ products })
//     } catch (error) {
//         console.error(error)
//         return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
//     }
// }



import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
        return NextResponse.json({ categories })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}