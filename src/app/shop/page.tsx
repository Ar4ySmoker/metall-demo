import AsortimentBlock2 from "@/components/asortiment-block-2";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main>
      <Breadcrumbs />
             <AsortimentBlock2/>
      <ul>
        
        <li><Link href="/catalog/armatura">Арматура</Link></li>
        <li><Link href="/catalog/truby">Труба</Link></li>
        <li><Link href="/catalog/shveller">Швеллер</Link></li>
      </ul>
    </main>
  );
}
