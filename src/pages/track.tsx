

import ParcelMap from "@/components/parcelMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

export default function Track() {
  const [toggleMapVisibility, setMapVisibility] = useState(false);
  const [loader, setLoader] = useState(false);
  const [tracking_num, setTracking_num] = useState("");
  const [trackData, setTrackingData] = useState<[Array<any>, any]>([] as any);
  const [coordinates, setCoordinates] = useState({
    current: [51.505, -0.09],
    destination: [51.51, -0.1]
  });

  const getCoordinates = async (address: string) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: address,
          format: 'json',
          limit: 1
        }
      });

      if (response.data && response.data[0]) {
        return [parseFloat(response.data[0].lat), parseFloat(response.data[0].lon)];
      }
      return null;
    } catch (error) {
      console.error("Error getting coordinates:", error);
      return null;
    }
  };

  async function fetchTrack(ev: any) {
    ev.preventDefault();
    const form = ev.target;

    const formData = new FormData();
    formData.append('ref_no', form.tracking_num.value);

    setLoader(true)
    try {
      const response = await axios.post("http://localhost/delivery-backend/admin/api/ajax.php?v1=get_parcel_heistory", formData);
      console.log(response.data, response.data[0][response.data[0].length-1].current_location)
      if (response.data) {
        const data = response.data;

        const type = ['deliver', 'pickup']

        let currentCoords: any, destCoords: any;

        if (type[data[1].type] == "deliver") {
          // from current to recipient house address
          currentCoords = await getCoordinates(response.data[0][response.data[0].length-1].current_location);
          destCoords = await getCoordinates(response.data[1].recipient_address);
        } else  if (type[data[1].type] == "pickup") {
          // from current to branch
          currentCoords = await getCoordinates(response.data[0][response.data[0].length-1].current_location);
          destCoords = await getCoordinates(response.data[1].to_branch.city);
        }

        if (currentCoords && destCoords) {
          setCoordinates({
            current: currentCoords,
            destination: destCoords
          });
          setMapVisibility(true);
          setTrackingData(response.data)
          setLoader(false)
        }
      }
    } catch (error) {
      // alert("Something went wrong. check tracking ID or network connection")
      console.error("Error:", error);
      setLoader(false)
    }
  }

  // Rest of your JSX remains the same until the map section

  return (
    <div className="h-[850px] overflow-hidden flex pt-20">
      {/* Your existing tracking info component */}
      <div className="w-[400px]  h-full max-w-full border mt-4 p-3 px-3">
        <button className="mb-3 bg-slate-300 rounded-full  px-2 uppercase text-sm">Show map</button>
        <div className="">
          <form action="" onSubmit={fetchTrack} method="get" className="flex flex-wrap gap-2 border-b pb-3">
            <Input placeholder="Enter your reciept number" name="tracking_num" onChange={(e) => setTracking_num(e.target.value)} />
            <Button className="flex items-center bg-emerald-600 hover:bg-emerald-600/90 disabled:opacity-60" disabled={loader}>
              <span>Track</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </span>
            </Button>
          </form>
        </div>

        {trackData.length ? (<>
          {/* <div className="flex justify-between p-2">
            <p>Total package:</p>
            <div className="font-bold">{trackData[0]?.length}</div>
          </div> */}

          <div className="border-t pt-3 space-y-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6" viewBox="0 0 16 16">
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
              </div>

              <div className="">
                <div className="text-sm text-gray-600">Shipment ID</div>
                <div className="font-semibold">#{trackData[1]?.batch_no}</div>
              </div>
            </div>

            {/* 
          <div className="">
            <div className="flex justify-between">
              <p className="leading-[1] text-gray-600">You'll recieve your package:</p>
              <div className="">21 May</div>
            </div>
          </div> */}
          </div>

          <div className="mt-8 font-  ">
            <div className="flex gap-3 justify-between border-b pb-2">
              <div className="flex justify-between gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>

                <p>Delivery Information</p>
              </div>

              {trackData[1]?.status == 1 && <button className="text-orange-600 bg-orange-200 border border-orange-500 uppercase px-2 text-xs rounded-full py-1">on going</button>}
              {trackData[1]?.status == 0 && <button className="text-gray-600 bg-gray-200 border border-gray-500 uppercase px-2 text-xs rounded-full py-1">pending</button>}
              {trackData[1]?.status == 2 && <button className="text-emerald-600 bg-emerald-200 border border-emerald-500 uppercase px-2 text-xs rounded-full py-1">Delivered</button>}
            </div>

            <div className="flex w-full justify-between items-center gap-2 mt-3">
              <div className="">
                <p className="text-gray-600">From</p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis w-[160px] text-sm">{trackData[1]?.sender_address}</span>  </p>
                <p className=" w-[160px] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  {trackData[1]?.sender_contact}</p>
              </div>

              <div className="">
                <p className="text-gray-600">To</p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis w-[160px] text-sm">{trackData[1]?.recipient_address}</span> </p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis w-[160px] text-sm">{trackData[1]?.recipient_contact}</span> </p>
              </div>

            </div>

            <div className="mt-5 space-y-3">
              {trackData[1]?.status == 1 && <div className="flex justify-between items-center gap-4 w-full">
                <p className="text-right animate-drive"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg></p>
              </div>}

              {
                tracking_num ? trackData[0].reverse().map(({ message, date_created }: any) => (
                  <div key={date_created} className="flex justify-between items-center gap-4">
                    <div className="font-bold font-inter text-gray-600 text-xs">{(new Date(date_created)).toLocaleString()}</div>
                    <p className="text-right text-sm">{message}</p>
                  </div>
                )) : (
                  <div className="py-4 text-gray-600">
                    <p>Nothing is here .... search by tracking ID</p>
                  </div>
                )
              }
            </div>
          </div>
        </>) : (
          <div className="py-4 text-gray-600">
            <p>Nothing is here .... search by tracking ID</p>
          </div>
        )}
      </div>

      {toggleMapVisibility && (
        <div className="relative w-full h-full md:block">
          <button
            onClick={() => setMapVisibility(false)}
            className="absolute top-2 right-10 mb-3 bg-red-500 text-white font-bold rounded-full px-2 uppercase text-sm z-[900]"
          >
            Close Map
          </button>
          <ParcelMap
            currentLocation={coordinates.current}
            destination={coordinates.destination}
          />
        </div>
      )}
    </div>
  );
}
