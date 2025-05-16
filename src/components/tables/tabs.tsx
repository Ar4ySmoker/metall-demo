'use client'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useRouter } from 'next/navigation'

const TabsComponent = () => {
    const router = useRouter()

  return(

    <Tabs defaultValue="account" className="rounded-md border">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="a-3" onClick={() => router.push('/shop/armatura/a500c')}>A-3</TabsTrigger>
        <TabsTrigger value="a-1" onClick={() => router.push('/shop/armatura/a400c')}>A-1</TabsTrigger>
        <TabsTrigger value="Композитная" onClick={() => router.push('/shop/armatura/composite')}>Композитная</TabsTrigger>
      </TabsList>
    </Tabs>
  )
};

export default TabsComponent;
