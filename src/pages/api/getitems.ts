import { type NextApiRequest, type NextApiResponse } from "next";


const videoAssets = [
    { id: 1, image: "/assets/photo-1530584379127-80bf85c555ed.avif" },
    { id: 2, image: "/assets/photo-1603314585442-ee3b3c16fbcf.avif" },
    { id: 3, image: "/assets/photo-1611416517780-eff3a13b0359.avif" },
  ]

const people = [
    { id: 1, name: "Alan Tiger", image: "/assets/user1.png" },
    { id: 2, name: "John Doe", image: "/assets/user2.png" },
    { id: 3, name: "Jane Doe", image: "/assets/user3.png" },
    { id: 3, name: "Thomas Rodriguez", image: "/assets/user4.png" },
  ]


const getItems = (req: NextApiRequest, res: NextApiResponse) => {

    res.status(200).json({videos: videoAssets, people: people});

}


export default getItems;