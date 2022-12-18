import { 
  Card,
} from "flowbite-react";

const CardCustom = ({ 
  name, 
  title, 
  content, 
  created,
} ) => {

  return (
    <div>
     <Card className="mx-auto relative md:1/3 w-1/2 lg:w-60 h-full">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white -mb-2">
          {title}
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400 -mb-2">
          {content}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">{name},</span> {created}
      </p>
    </Card>
    </div>    
  )
}

export default CardCustom



