import { useEffect } from "react";
import searchicon from "../../assets/icon/search icon.svg"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AllMobileCard from "./AllMobileCard";

const AllMobile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [search, setSearch] = useState('')
    const axiosPublic = useAxiosPublic()
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(0)

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }
    const { data: mobile = [], refetch } = useQuery({
        queryKey: ['mobile', search, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allmobile?search=${search.toString()}&page=${currentPage}&size=${itemsPerPage}`)
            return res.data;
        }
    })
    console.log(mobile)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosPublic.get('/mobile-stats');
                setCount(res.data.mobile);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
        refetch()
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
        refetch()
    }


    return (
        <div className=" mt-8">

            <div className="bg-[#F3F3FA] py-8  rounded-md">
                {/* <p>{house.length}</p> */}

                <h1 className="merrin text-center text-[3rem] font-semibold text-[#141B2D]">Explore the Latest Mobiles</h1>
                <p className="text-center text-[#141B2D] text-[1.2rem] sans mt-3 w-[50vw] mx-auto">Discover a wide range of cutting-edge mobile phones with advanced features, stunning designs, and powerful performance.</p>


                <form onSubmit={handleSearch}>
                    <div className="">
                        <div className="md:w-[33rem] mx-auto mt-8 h-[3.5rem] relative flex justify-center items-center">
                            <input type="text" name="search" placeholder="Type Mobile Name" className="md:w-[19rem] border-none outline-none h-[3.5rem] text-lg pl-4 bg-white shadow-sm rounded-sm" />

                            <button type="submit" className="btn border-none bg-[#1C3988] lg:w-[9.4rem] h-[3.5rem] text-base text-white ml-2 btn-neutral"><img src={searchicon} alt="" /> Search</button>
                        </div>
                    </div>
                </form>

            </div>


            <div className="mx-[10%] mt-20 grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-8">
                {
                    mobile?.map(phone=><AllMobileCard key={phone?._id} phone={phone} />)
                }
                
            </div>

            <div className='text-center mb-10 space-x-4 md:space-x-6 mt-20'>
              
              <button className="btn  btn-outline border-[#1C3988] border-4 md:w-[7rem] md:text-lg" onClick={handlePrevPage}>Prev</button>
              {
                  pages.map(page => <button
                      className={currentPage === page ? 'btn bg-[#1C3988] text-xl font-bold text-white' : 'btn btn-outline border-[#1C3988] border-4 text-xl'}
                      onClick={() => setCurrentPage(page)}
                      key={page}
                  >{page}</button>)
              }
              <button className="btn btn-outline border-[#1C3988] border-4 md:w-[7rem] md:text-lg" onClick={handleNextPage}>Next</button>
              <select className="btn bg-[#1C3988] text-xl text-white" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
              </select>
          </div>



        </div>
    );
};

export default AllMobile;