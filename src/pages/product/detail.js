import { get } from "../../api/products";
import { addTocart } from "../../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DetailProductPage = {
  async render(id) {
    const { data } = await get(id);
    return `
        <div class="max-w-7xl mx-auto py-10 grid grid-cols-2 gap-8">
            <div>
                <img src="${data.img}" />
            </div>
            <div>
                <h1 class="text-4xl font-bold text-indigo-500">${data.name}</h1>
                
                <p class="my-8">${data.desc}</p>
                <p class="font-bold text-3xl">${data.price}</p>
                <div>
                    <input type="number" id="inputValue" class="border border-gray-500" />
                </div>
                <button id="btnAddToCart" class="block bg-red-700 text-white text-2xl uppercase w-full py-5 my-5">Chọn mua</button>
            </div>
        </div>
            
        `;
  },
  afterRender(id){
      const btnAddToCart = document.querySelector('#btnAddToCart');
      const inputValue = document.querySelector('#inputValue');
      btnAddToCart.addEventListener('click', async () => {
        const { data } = await get(id);
        addTocart({...data, quantity: inputValue.value ? +inputValue.value : 1}, () => {
            toastr.success("Đã thêm");
        })
      })
  }
};
export default DetailProductPage;
