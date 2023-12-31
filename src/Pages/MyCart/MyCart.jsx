import Swal from "sweetalert2";
import deleteicon from "../../assets/icon/delete.svg"
import useCart from "../../hooks/usecart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const { mutate } = useMutation({
    mutationKey: ['orders'],
    mutationFn: (addingData) => {
        return axios.post('https://job-task-mobile-ordering-application-server.vercel.app/orders', addingData, { withCredentials: true, })
    },
    onSuccess: () => {
        Swal.fire({
            title: "Thank You for purchasing",
            text: "Your order has been placed",
            icon: "success",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK"
        }).then((result) => {
            if (result.isConfirmed) {
                // navigate('/')
                refetch();
            }
        });
    }

})

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            console.log(res)
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success"
              });
            }

          })

      }
    });
  }

  const handlePlaceOrder = ()=>{
    
      mutate({
        email: user.email,
        price: totalPrice,
        date: new Date(),
        cartIds: cart.map(item=>item._id),
        menuItemIds: cart.map(item=>item.mobile_Id),
        status: 'pending'
    })
    refetch();

  }
  return (
    <div className="lg:px-[10%] w-full  min-h-screen">

      

      <div className="bg-[#f3f3fa2b] p-12 rounded-xl">


      <div className="flex justify-between items-center ">
        <h1 className="text-black lg:text-[2rem] lg:font-bold">Items: {cart.length}</h1>
        <h1 className="text-black lg:text-[2rem] lg:font-bold">Total Price: ${totalPrice}</h1>
        {
          cart.length ? <button onClick={handlePlaceOrder} className="btn btn-neutral text-white text-xl bg-[#1C3988] border-none">Place Order</button>
          :
          <button disabled className="btn btn-neutral text-white text-xl bg-[#1C3988] border-none">Place Order</button>
        }
      </div>


      {/* table  */}

      <div className="rounded-tl-2xl rounded-tr-2xl">

        <div className="overflow-x-auto rounded-tl-2xl rounded-tr-2xl">
          {
            cart.length>0 ? <table className="table mt-10 rounded-tl-2xl rounded-tr-2xl">
            {/* head */}
            <thead className="bg-[#1C3988] h-[4.5rem] rounded-tl-2xl rounded-tr-2xl text-white font-semibold lg:text-lg">
              <tr>
                <th>
                  
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                cart.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                    </div>
                  </td>
                  <td>
                    {item.modelname}
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item._id)} className="btn w-[3.1rem] h-[3.1rem] rounded-md bg-[#B91C1C] btn-neutral border-none btn-xs"><img src={deleteicon} alt="" /></button>
                  </th>
                </tr>)
              }
            </tbody>
          </table>

          :
          <div>
            <h1 className="text-2xl text-center mt-12">You have not added any product yet</h1>
          </div>
          }
        </div>

      </div>

      </div>

    </div>
  );
};

export default MyCart;