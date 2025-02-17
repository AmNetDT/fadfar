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
      <div className="flex w-full" style={{ color: '#000000' }}>
        {/* Wrap the Select component with a div and apply responsive classes */}
        <div className="hidden md:block">
          <Select name="category">
            <SelectTrigger
              style={{
                backgroundColor: '#ffffff',
                color: '#1d132d',
                width: '100px',
                padding: '25px',
              }}
            >
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                key={'All'}
                value={'all'}
                style={{
                  fontSize: '1.0rem',
                  color: 'black',
                }}
                className="hover:text-black"
              >
                All
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
          style={{
            backgroundColor: 'lavender',
            color: '#000000',
            width: '450px',
            padding: '25px 3px',
            fontSize: '1.0rem',
          }}
        />
        <Button
          style={{
            backgroundColor: '#F5BF77',
            padding: '26px',
            fontSize: '1.0rem',
          }}
        >
          <SearchIcon />
        </Button>
      </div>
    </form>
  )
}
