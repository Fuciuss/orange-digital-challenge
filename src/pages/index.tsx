import { useState, useEffect } from "react";


import {
  Bars3Icon,
  EllipsisVerticalIcon,
  PlayCircleIcon,
  HandThumbUpIcon,
  ClockIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const VideoTile = (props) => {
  const { image } = props;

  return (
    <>
      <div className="relative mx-2">
        <img className="" src={image}></img>
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircleIcon className="h-16 w-16 cursor-pointer fill-transparent stroke-slate-200 text-opacity-50"></PlayCircleIcon>
        </div>

        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          <HandThumbUpIcon className="h-6 w-6 cursor-pointer fill-slate-200"></HandThumbUpIcon>
        </div>
      </div>
    </>
  );
};

const DetailCard = (props) => {
  const name = props.name;
  const image = props.image;

  return (
    <>
      <li className="">
        <div className="mx-4 my-2 flex">
          <div className="self-center">
            <img src={image}></img>
          </div>
          <div className="ml-3 mt-1 grid grid-rows-3 content-between">
            <p className="text-lg font-medium tracking-wide text-slate-600">
              {name}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              These is very adorable. I am loving this. Somtimes this pictures
              are just beautiful!
            </p>

            <div className="flex space-x-4">
              <div className="flex cursor-pointer items-center text-sm text-slate-400">
                <ClockIcon className="mr-1 h-3 w-3 text-sm text-slate-400"></ClockIcon>
                10 minutes ago
              </div>
              <div className="flex cursor-pointer items-center text-sm text-slate-400">
                <HeartIcon className="mr-1 h-3 w-3"></HeartIcon>
                4.5k
              </div>
              <div className="flex cursor-pointer items-center text-sm text-slate-400">
                <ChatBubbleLeftIcon className="mr-1 h-3 w-3"></ChatBubbleLeftIcon>
                1.5k
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

function SliderWindow() {}

function App() {
  const [count, setCount] = useState(0);

  const [selectedToggle, setSelectedToggle] = useState(true);

  const [menuTriggered, setMenuTriggered] = useState(false);

  const [toggleScreen, setToggleScreen] = useState(true);

  const [people, setPeople] = useState([])
  const [videos, setVideos] = useState([])

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("/api/getitems").then((res) => res.json()).then((data) => {

      
          
      setPeople(data.people)
      setVideos(data.videos)
      setIsLoading(false)
    })



  })

  // const { isLoading, data, error } = useQuery(["fetchData"], fetchData);

  if (isLoading) return <div>Loading...</div>;





  function handleSelectedTab() {
    setSelectedToggle(!selectedToggle);
  }

  return (
    <div className="flex  min-h-screen bg-slate-200">
      <div className="relative m-auto my-10 max-w-md bg-white shadow-2xl ">
        {menuTriggered ? (
          <div className="absolute z-10 h-40 w-full bg-purple-700">
            <div className="">
              <XMarkIcon
                onClick={() => {
                  setMenuTriggered(false);
                }}
                className="m-6 h-6 w-6 cursor-pointer text-white"
              ></XMarkIcon>
            </div>
            <div className="space-y-2 text-center font-semibold tracking-wider text-white">
              <p
                className="cursor-pointer"
                onClick={() => {
                  setToggleScreen((current) => true);
                  setMenuTriggered(false);
                }}
              >
                GALLERY
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  setToggleScreen((current) => false);
                  setMenuTriggered(false);
                }}
              >
                DETAIL PAGE
              </p>
            </div>
          </div>
        ) : null}

        {toggleScreen ? (
          <>
            <div className="bg-gradient-to-r from-purple-600 to-purple-900 py-5">
              <div className="mx-6 flex justify-between">
                <Bars3Icon
                  className="h-6 w-6 cursor-pointer text-white"
                  onClick={() => setMenuTriggered(true)}
                />
                <h3 className="font-bold text-white">GALLERY</h3>
                <EllipsisVerticalIcon className="h-6 w-6 cursor-pointer text-white" />
              </div>
            </div>
            <div className="flex justify-around text-center font-semibold text-slate-700 shadow-md">
              <div
                onClick={handleSelectedTab}
                className={
                  selectedToggle
                    ? "w-full cursor-pointer border-0 border-b-4 border-purple-900 p-2"
                    : "w-full cursor-pointer p-2"
                }
              >
                VIDEOS
              </div>
              {/* <div className="w-full p-2 border-b-4 border-0 border-purple-900">VIDEOS</div> */}
              <div
                onClick={handleSelectedTab}
                className={
                  !selectedToggle
                    ? "w-full cursor-pointer border-0 border-b-4 border-purple-900 p-2"
                    : "w-full cursor-pointer p-2"
                }
              >
                PHOTOS
              </div>
            </div>
            <div className="mt-4 space-y-4">
              {videos.videos.map((video) => (
                <VideoTile key={video.id} image={video.image} />
              ))}
            </div>
          </>
        ) : (
          <div className="m-auto max-w-md bg-white shadow-2xl ">
            <div className="grid grid-rows-2 content-between bg-purple-500 bg-my_bg_image bg-cover bg-center py-4 bg-blend-multiply">
              <div className="mx-6 flex justify-between">
                <Bars3Icon
                  onClick={() => {
                    setMenuTriggered(true);
                  }}
                  className="h-6 w-6 cursor-pointer text-white"
                />
                <h3 className="font-bold text-white">DETAIL PAGE</h3>
                <EllipsisVerticalIcon className="h-6 w-6 cursor-pointer text-white" />
              </div>
              <div className="mx-6 text-slate-100">
                <div className="mt-6 text-3xl tracking-wider">
                  Lost on the Road to the mountains
                </div>
                <div className="mt-8 flex justify-between">
                  <div className="space-y-2 text-sm tracking-wide">
                    <div className="flex">
                      <div>By: Alan Tiger</div>
                      <div className="ml-8">At: Paris, France</div>
                    </div>
                    <div>On: March 31st, 2016</div>
                  </div>

                  <div className="flex space-x-8 text-sm">
                    <div className="flex items-center">
                      <HeartIcon className="mr-1 h-5 w-5" />
                      <p>4.5k</p>
                    </div>
                    <div className="flex items-center">
                      <ChatBubbleLeftIcon className="mr-1 h-5 w-5" />

                      <p>1.1k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-2 space-y-2 divide-y divide-gray-200 px-1">
              {people.people.map((person) => (
                <DetailCard
                  key={person.id}
                  name={person.name}
                  image={person.image}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
