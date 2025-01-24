import Single_Project from "../../../../components/Project/single_project";
import projects from "../../data";

export default async function Page({params,}: {params: Promise<{ id:number, slug: string }>}) {
    
    const id = (await params).id
    const slug = (await params).slug
    const project = projects().findLast(o => o.id == id && o.slug == slug)
    
    if (project) {
        return (
            <Single_Project Project={project}/>
        )
    }
}