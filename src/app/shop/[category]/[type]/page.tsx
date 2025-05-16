'use client';
// src/app/catalog/[category]/[subcategory]/page.tsx

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';
import { ProductTable } from '@/components/tables/product-table';

const TypePage = () => {
  const pathname = usePathname();  // Получаем текущий путь
  const [products, setProducts] = useState<any[]>([]);

  // Извлекаем category и subcategory из пути
  const pathSegments = pathname.split('/');  // Разделяем путь по слешам
  const category = pathSegments[2];  // Должен быть на позиции 2
  const slug = pathSegments[3];  // Должен быть на позиции 3

  useEffect(() => {
    if (category && slug) {
      const fetchProducts = async () => {
        try {
          const res = await fetch(`/api/catalog/${category}/${slug}`);
          const data = await res.json();
          setProducts(data);
        } catch (error) {
          console.error('Ошибка при загрузке товаров', error);
        }
      };

      fetchProducts();
    }
  }, [category, slug]);

  if (!products.length) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>      <Breadcrumbs />
    
      <div>
        <ProductTable products={products}/>
        {/* {products.map((product) => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            <p>Цена: {product.price} ₽</p>
            <p>{product.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TypePage;
