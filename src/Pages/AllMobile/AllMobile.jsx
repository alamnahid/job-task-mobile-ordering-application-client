import { useEffect } from "react";
import searchicon from "../../assets/icon/search icon.svg"
import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AllMobileCard from "./AllMobileCard";
import Loading from "../../Components/Loading/Loading";

const AllMobile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const axiosPublic = useAxiosPublic()
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(0)
    const [brandName, setBrandName] = useState('')
    const [asc, setAsc] = useState(true)
    const [mobiletype, setMobileType] = useState('')
    const [mobileProcessor, setMobileProcessor] = useState('')
    const [mobileStorage, setMobileStorage] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }
    const { data: mobile = [], refetch, isLoading } = useQuery({
        queryKey: ['mobile', search, currentPage, itemsPerPage, brandName, mobiletype, mobileProcessor, mobileStorage, asc],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allmobile?modelname=${search.toString()}&page=${currentPage}&size=${itemsPerPage}&brandname=${brandName}&type=${mobiletype}&processor=${mobileProcessor}&storage=${mobileStorage}&sort=${asc ? 'asc' : 'des'}`)
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

    if(isLoading){
        return <Loading/>
    }


    return (
        <div className=" mt-8">

            <div className="bg-[#F3F3FA] py-8  rounded-md">
                {/* <p>{house.length}</p> */}

                <h1 className=" text-center text-2xl lg:text-[3rem] font-semibold text-[#141B2D]">Explore the Latest Mobiles</h1>
                <p className="text-center text-[#141B2D] lg:text-[1.2rem] sans mt-3 lg:w-[50vw] mx-auto">Discover a wide range of cutting-edge mobile phones with advanced features, stunning designs, and powerful performance.</p>


                <form onSubmit={handleSearch}>
                    <div className="">
                        <div className="md:w-[33rem] mx-auto mt-8 h-[3.5rem] relative flex justify-center items-center">
                            <input type="text" name="search" placeholder="Type Mobile Name" className="md:w-[19rem] border-none outline-none h-[3.5rem] text-lg pl-4 bg-white shadow-sm rounded-sm" />

                            <button type="submit" className="btn border-none bg-[#1C3988] lg:w-[9.4rem] h-[3.5rem] text-base text-white ml-2 btn-neutral"><img src={searchicon} alt="" /> Search</button>
                        </div>
                    </div>
                </form>

                <div className="lg:mx-[10%] mt-12 flex flex-wrap items-center justify-center gap-4">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-white btn-neutral border-[1px] text-lg text-black border-[#1C3988] hover:text-white">Choose the Brand <FaChevronDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setBrandName('Apple')} className="font-medium">Apple</button></li>
                            <li><button onClick={() => setBrandName('Samsung')} className="font-medium">Samsung</button></li>
                            <li><button onClick={() => setBrandName('Oppo')} className="font-medium">Oppo</button></li>
                            <li><button onClick={() => setBrandName('Vivo')} className="font-medium">Vivo</button></li>
                            <li><button onClick={() => setBrandName('Xiaomi')} className="font-medium">Xiaomi</button></li>
                            <li><button onClick={() => setBrandName('Redmi')} className="font-medium">Redmi</button></li>
                            <li><button onClick={() => setBrandName('Realme')} className="font-medium">Realme</button></li>
                            <li><button onClick={() => setBrandName('Nokia')} className="font-medium">Nokia</button></li>
                            <li><button onClick={() => setBrandName('Symphony')} className="font-medium">Symphony</button></li>
                            <li><button onClick={() => setBrandName('Itel')} className="font-medium">Itel</button></li>
                            <li><button onClick={() => setBrandName('Sony')} className="font-medium">Sony</button></li>
                            <li><button onClick={() => setBrandName('Pixel')} className="font-medium">Pixel</button></li>
                            <li><button onClick={() => setBrandName('Motorolla')} className="font-medium">Motorolla</button></li>
                            <li><button onClick={() => setBrandName('OnePlus')} className="font-medium">OnePlus</button></li>
                            <li><button onClick={() => setBrandName('Lenovo')} className="font-medium">Lenovo</button></li>


                        </ul>
                    </details>

                    <div>
                    <button className="btn capitalize bg-white btn-neutral border-[1px] text-lg text-black border-[#1C3988] hover:text-white" onClick={()=>setAsc(!asc)}>{asc ? 'Sort Price High to Low' : 'Sort Price Low to High'}</button>
                    </div>

                    <details className="dropdown">
                        <summary className="m-1 btn bg-white btn-neutral border-[1px] text-lg text-black border-[#1C3988] hover:text-white">Sort By Type <FaChevronDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setMobileType('Smartphone')} className="font-medium">Smartphone</button></li>
                            <li><button onClick={() => setMobileType('Tablet')} className="font-medium">Tablet</button></li>
                            <li><button onClick={() => setMobileType('Flip Phones')} className="font-medium">Flip Phones</button></li>
                            <li><button onClick={() => setMobileType('Others')} className="font-medium">Others</button></li>
                        </ul>
                    </details>


                    <details className="dropdown">
                        <summary className="m-1 btn bg-white btn-neutral border-[1px] text-lg text-black border-[#1C3988] hover:text-white">Sort By Processor <FaChevronDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setMobileProcessor('Snapdragon 888')} className="font-medium">Snapdragon 888</button></li>
                            <li><button onClick={() => setMobileProcessor('Apple A15 Bionic')} className="font-medium">Apple A15 Bionic</button></li>
                            <li><button onClick={() => setMobileProcessor('Exynos 2100')} className="font-medium">Exynos 2100</button></li>
                            <li><button onClick={() => setMobileProcessor('MediaTek Dimensity 1200')} className="font-medium">MediaTek Dimensity 1200</button></li>
                            <li><button onClick={() => setMobileProcessor('Kirin 9000')} className="font-medium">Kirin 9000</button></li>
                            <li><button onClick={() => setMobileProcessor('Snapdragon 870')} className="font-medium">Snapdragon 870</button></li>
                            <li><button onClick={() => setMobileProcessor('Apple A14 Bionic')} className="font-medium">Apple A14 Bionic</button></li>
                            <li><button onClick={() => setMobileProcessor('Snapdragon 765G')} className="font-medium">Snapdragon 765G</button></li>
                            <li><button onClick={() => setMobileProcessor('MediaTek Helio G95')} className="font-medium">MediaTek Helio G95</button></li>
                            <li><button onClick={() => setMobileProcessor('Exynos 990')} className="font-medium">Exynos 990</button></li>
                            <li><button onClick={() => setMobileProcessor('Others')} className="font-medium">Others</button></li>
                        </ul>
                    </details>

                    <details className="dropdown">
                        <summary className="m-1 btn bg-white btn-neutral border-[1px] text-lg text-black border-[#1C3988] hover:text-white">Sort By Storage <FaChevronDown /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setMobileStorage('4/64')} className="font-medium">4GB RAM / 64GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('8/256')} className="font-medium">6GB RAM / 128GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('12/512')} className="font-medium">12GB RAM / 512GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('16/1TB')} className="font-medium">16GB RAM / 1TB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('6/64')} className="font-medium">6GB RAM / 64GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('8/128')} className="font-medium">8GB RAM / 128GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('12/256')} className="font-medium">12GB RAM / 256GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('16/512')} className="font-medium">16GB RAM / 512GB ROM</button></li>
                            <li><button onClick={() => setMobileStorage('24/1TB')} className="font-medium">24GB RAM / 1TB ROM</button></li>
                        </ul>
                    </details>
                </div>

            </div>


            {
                mobile.length>0 ?
                <div className="mx-[10%] mt-20 grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-8">
                {
                    mobile?.map(phone => <AllMobileCard key={phone?._id} phone={phone} />)
                }

            </div>
            :
            <div>
                <h1 className="text-center text-lg mt-12">Out Of Stock Please Browse more product</h1>
            </div>
            }

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