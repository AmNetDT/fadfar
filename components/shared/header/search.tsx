import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getAllCategories } from '@/lib/actions/product.actions'
import { SearchIcon } from 'lucide-react'

export default async function Search() {
  const categories = await getAllCategories()
  return (
    <form action="/search" method="GET">
      <div className="flex w-full gap-2">
        {/* Wrap the Select component with a div and apply responsive classes */}
        <div className="hidden md:block">
          <Select name="category">
            <SelectTrigger className="p-6 bg-white text-black hover:bg-slate-50  hover:text-orange-500 text-1xl border-none">
              <SelectValue placeholder="SORT BY CATEGORY" />
            </SelectTrigger>
            <SelectContent className="p-4 bg-orange-50 font-extralight hover:bg-orange-50 rounded-none">
              <SelectItem key={'All'} value={'all'}>
                SORT BY CATEGORY
              </SelectItem>
              {categories.map((category: { name: string }) => (
                <SelectItem
                  key={category.name}
                  value={category.name}
                  style={{
                    fontSize: '1.0rem',
                    color: 'black',
                  }}
                  className="hover:text-black"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Input
          name="q"
          type="text"
          className="text-1xl p-3 border-2 border-slate-300 mx-0 rounded-none"
          style={{
            width: '450px',
            height: '100%',
          }}
        />
        <Button className="p-6 bg-orange-500 text-white text-1xl font-extralight">
          <SearchIcon /> Search
        </Button>
      </div>
    </form>
  )
}
