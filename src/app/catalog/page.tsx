import Link from "next/link";

export default function CatalogPage() {
  return (
    <main>
      <h1>Каталог металлопроката</h1>
      <ul>
        <li><Link href="/catalog/armatura">Арматура</Link></li>
        <li><Link href="/catalog/truby">Труба</Link></li>
        <li><Link href="/catalog/shveller">Швеллер</Link></li>
      </ul>
    </main>
  );
}
