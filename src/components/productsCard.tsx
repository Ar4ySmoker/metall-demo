import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

import Link from "next/link"


const ProductsCard = () => {

  
    return (
<>
<Card className="">
<CardHeader>
<div className="flex items-start justify-between w-full">
<div className="flex flex-col items-start gap-2">
<CardTitle>Арматура А500C</CardTitle>
<CardDescription>12 м</CardDescription>
</div>
<CardTitle className="flex flex-col items-center ">
<span className="line-through text-destructive">46000 р.</span>
&nbsp;&nbsp;
<span className="text-accent">42500 р.</span>
</CardTitle>
</div>
</CardHeader>
<Link href={`/dashboard/products/description/$product.id`}>
<CardContent className="flex flex-col items-start justify-center">
    <Image src='/images/armatura-10mm95.jpg' alt="product image" width={300} height={300} className="h-48 w-full object-cover" />
    <div className="flex items-center justify-between w-full">
    <CardTitle className="flex items-center gap-1">
   
    </CardTitle>
    <CardTitle>Осаток: 5 т.</CardTitle>
    </div>
</CardContent>
</Link>
<CardFooter className="flex items-center justify-between w-full">
<Button >Заказать</Button>
<Button >Редактировать</Button>
</CardFooter>
</Card>
</>
    )
}
export default ProductsCard