import { asortiment } from "@/lib/constants";
import Link from "next/link";

export const AsortimentBlock = () => {
  // Группируем ассортимент, как в предыдущем примере
  type GroupType = { type: "group"; title: string; image?: string };
  type ItemType = { type: "item"; title: string; [key: string]: string };
  type Grouped = { group: GroupType; items: ItemType[] };

  const groupedAsortiment = asortiment.reduce<Grouped[]>((acc, item) => {
    if (item.type === "group") {
      acc.push({ group: item as GroupType, items: [] });
    } else if (item.type === "item") {
      if (acc.length > 0) {
        acc[acc.length - 1].items.push(item as ItemType);
      }
    }
    return acc;
  }, []); // Начинаем с пустого массива

  return (
    <div className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16">
      <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
        <h2 className="mt-3 text-xl md:text-xl font-bold tracking-tight">
          Ассортимент
        </h2>
        <div className="mt-5 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Мапим через groupedAsortiment */}
          {groupedAsortiment.map((group, index) => (
            <div
              key={index}
              className="relative bg-accent p-6 pb-10 rounded-lg w-full h-[380px] flex flex-col justify-between"
              style={{
                backgroundImage: group.group.image
                  ? `url(${group.group.image})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Полупрозрачный слой для улучшения читаемости */}
              <div className="absolute inset-0 bg-black/50 rounded-lg" />
              
              <h3 className="mt-8 font-bold text-xl text-white z-10">{group.group.title}</h3>

              <div className="space-y-4 mt-4 z-10">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <Link
                      href="#"
                      className="block mt-2.5 mb-4 text-white font-medium hover:text-primary-500 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
