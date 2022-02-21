import { signup } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signup = {
	render() {
		return `
            <form id="formSignup">
			<div class=" bg-gray-300 p-28">
				<div class="flex justify-center">
					<div
						class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:text-white sm:px-6 md:px-8 lg:px-10 al">
						<div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-gray-400">
							Create a new account
						</div>
						<span
							class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
							Already have an account ?
							<a href="/#/signin" target="_blank"
								class="text-sm text-blue-500 underline hover:text-blue-700">
								Sign in
							</a>
						</span>
						<div class="p-6 mt-8">
							<form action="#">
								<div class="flex flex-col mb-2">
									<div class=" relative ">
										<input type="text" id="username"
											class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="username" />
									</div>
								</div>
								<div class="flex flex-col mb-2">
									<div class=" relative ">
										<input type="email" id="email"
											class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="Email" />
									</div>
								</div>
								<div class="flex flex-col mb-2">
									<div class=" relative ">
										<input type="password" id="password"
											class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
											placeholder="password" />
									</div>
								</div>
								<div class="flex w-full my-4">
									<button type="submit"
										class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</form>
        `
	},
	afterRender() {

		const formSignup = document.querySelector('#formSignup');
		formSignup.addEventListener('submit', function (e) {
			e.preventDefault();
			signup({
				username: document.querySelector('#username').value,
				email: document.querySelector('#email').value,
				password: document.querySelector('#password').value,

			})
			function newFunction() {
				return true;
			}
		});
	}
}
export default Signup;