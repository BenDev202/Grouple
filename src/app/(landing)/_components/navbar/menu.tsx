"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useNavigation } from "@/hooks/navigation"

type Props = {
    orientation: 'desktop' | 'mobile'
}

const Menu = ({orientation}: Props) => {
  
    const { section, onSetSection } = useNavigation()
    switch(orientation){
        case 'desktop':
                    return (
                        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 border p-1 lg:flex hidden rounded-xl">
                            <CardContent className="p-0 flex gap-2">

                            </CardContent>
                        </Card>
                    )
            
        case 'mobile':
                return (
                    <div></div>
                )
                default: <></>
    }
}

export default Menu