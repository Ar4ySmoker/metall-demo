'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

// Словарь: slug => отображаемое название
const BREADCRUMB_LABELS: Record<string, string> = {
  'components': 'Компоненты',
  'breadcrumb': 'Хлебные крошки',
  'products': 'Товары',
  'about': 'О нас',
  'contact': 'Контакты',
  'armatura': 'Арматура',
  'catalog': 'Каталог',
  'profnastil': 'Профнастил',
  'truba-profilevnaya-pryamougolnaya': 'Труба профильная прямоугольная', 
  'shop': 'Магазин',
  'kvadrat': 'Квадрат',
  'truba': 'Труба',
  'a500c': 'Арматура А3 рифленая',
  '12mm': '12мм',
}


function formatLabel(segment: string) {
  return (
    BREADCRUMB_LABELS[segment] ||
    segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase()) // С Заглавной Буквы
  )
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/')
          const isLast = index === pathSegments.length - 1

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{formatLabel(segment)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{formatLabel(segment)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
