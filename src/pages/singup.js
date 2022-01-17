const singupPage = {
    render(){
        return /*html*/`
            <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Đăng ký</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Tạo tài khoản</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                    Bằng cách đăng ký, bạn đồng ý với
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Điều khoản dịch vụ
                        </a>Và
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Chính sách bảo mật
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                Bạn có sẵn sàng tạo một tai khoản?
                    <a class="no-underline border-b border-blue text-blue" href="admin/login/">
                        Đăng nhập
                    </a>.
                </div>
            </div>
            </div>
        `;
    },
};
export default singupPage