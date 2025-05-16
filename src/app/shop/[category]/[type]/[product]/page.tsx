import { FC } from 'react';

interface Product {
  _id: string;
  title: string;
  price: number;
  unit: string;
  diameterMm: number;
  length: number;
  slug: string;
}

interface ProductTableProps {
  products: Product[];
}

export const ProductTable: FC<ProductTableProps> = ({ products }) => {
  if (products.length === 0) {
    return <div>Нет результатов</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th>Единица измерения</th>
          <th>Диаметр</th>
          <th>Длина</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.price} ₽</td>
            <td>{product.unit}</td>
            <td>{product.diameterMm} мм</td>
            <td>{product.length} м</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
