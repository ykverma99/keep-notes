import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { BsImage, BsFillPinFill } from "react-icons/bs";
import { MdOutlineBrush } from "react-icons/md";
import { TbSquareCheck } from "react-icons/tb";
import Icons from "../components/Icons";
import axios from "axios";

const Main = () => {
  const [text, settext] = useState("");
  const [title, settitle] = useState("");
  const [toggleNotesInput, settoggleNotesInput] = useState(false);
  const [data, setdata] = useState([])
  const [save,setsave] = useState(false)

  // fetching data from database
  useEffect(() => {
    const fetchData = async()=>{
      try {
        const res = await axios.get("https://633c150774afaef164013e14.mockapi.io/notes")
        setdata(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [data,save])
  
  // input handlers
  const inputChange = (e) => {
    settext(e.target.value);
  };
  const titleChange = (e) => {
    settitle(e.target.value);
  };

  // submiting form and sending data to (mock api) website
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://633c150774afaef164013e14.mockapi.io/notes",
        { title: title, text: text }
      );
      settoggleNotesInput(false)
      setsave(true)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full space-y-14 my-12">
      <div className="flex justify-center items-center">
        {!toggleNotesInput ? (
          <div
            onClick={() => settoggleNotesInput(true)}
            className="flex items-center w-input2 h-12 shadow-md shadow-gray-500 rounded-lg px-4 justify-between"
          >
            <button disabled={true} className="cursor-text">
              Take a note...
            </button>
            <div className="flex">
              <Icons
                content={"New list"}
                img={<TbSquareCheck size={22} color={`#616161`} />}
              />
              <Icons
                content={"Note with drawing"}
                img={<MdOutlineBrush size={20} color={`#616161`} />}
              />
              <Icons
                content={"Note with image"}
                img={<BsImage size={20} color={`#616161`} />}
              />
            </div>
          </div>
        ) : (
          <form
            onSubmit={submitForm}
            className="w-input2 h-fit rounded-lg shadow-lg shadow-gray-500 px-4 border py-3"
          >
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Title"
                className="bg-transparent text-lg w-full outline-none"
                value={title}
                onChange={titleChange}
              />
              <BsFillPinFill size={20} />
            </div>
            <div>
              <textarea
                onChange={inputChange}
                type="text"
                placeholder="Take a note..."
                className="w-full scrolnone outline-none pt-6"
                value={text}
                aria-multiline={"true"}
              ></textarea>
            </div>
            <div>
              <div></div>
              <div className="">
                <button
                  type="submit"
                  className="bg-blue-500 text-white w-20 h-9 rounded transition ease-out delay-150 duration-500 hover:shadow-md hover:shadow-gray-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {data.map(e=>{
          return <Card key={e.id} title={e.title} para={e.text.split('\n').map((line,index)=>{
            return (index === 0) ? line : [<br key={index} />,line]
          })} />
          // console.log(e.text.replace('\n','<br>'));
        })}

      </div>
    </div>
  );
};

export default Main;
