import Badge from "@/Components/Badge/Badge";

export default function Sort({
  heading,
  items,
}: {
  heading: string;
  items?: string[];
}) {
  return (
    <>
      <h3 className="text-[14px]">{heading}</h3>
      <div className="w-full flex flex-wrap gap-2 items-center">
        {items && items.map((item, index)=>(
            <Badge className="text-[13px]" key={index}>{item}</Badge>
        ))}
      </div>
    </>
  );
}
