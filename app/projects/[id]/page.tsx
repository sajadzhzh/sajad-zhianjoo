import Details from "@/Components/Projects/Details/ProjectDetails"

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>
}){
    const { id } = await params
    return(
        <Details id={id}/>
    )
}