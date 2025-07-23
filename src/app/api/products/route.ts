// import { prisma } from "@/utils/connect"
// import { NextResponse } from "next/server"


// export const GET = async () => {
//     try {
//         const categories = await prisma.category.findMany()
//         return NextResponse.json({ categories })
//     } catch (error) {
//         console.error(error)
//         return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
//     }
// }





import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req:NextRequest) => {

    const {searchParams} = new URL(req.url)
    const cat = searchParams.get("cat")

    console.log("here is th eresponse: ", cat)

    try {
        const products = await prisma.product.findMany({
            where: {
                ...(cat ? {catSlug: cat} : {isFeatured: true})
            }
        })
        return NextResponse.json({ products })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}
