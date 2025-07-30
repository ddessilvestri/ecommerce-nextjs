import { Button } from "@/components/ui/button"
import { TOKEN } from "@/lib/constants"

export default function Home() {
  return (
    <div>
      <Button>Click me 2 </Button>
      <p>Welcome to the Home Page, {TOKEN}</p>
    </div>
  )
}

