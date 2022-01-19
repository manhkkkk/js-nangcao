import News from "./news";
import news from "../data";

const newsadmin = {
	render() {
		return /*html*/`
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div class="px-4 py-6 sm:px-0">
					<div class="flex flex-col">
						<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table class="min-w-full divide-y divide-gray-200">
										<thead class="bg-gray-50">
											<tr>
												<th scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													STT
												</th>
												<th scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Tiêu đề
												</th>
												<th scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
													Anh
												</th>
												<th scope="col" class="relative px-6 py-3">
													<span class="sr-only">Edit</span>
												</th>
											</tr>
										</thead>
										<tbody class="bg-white divide-y divide-gray-200">
											${news.map((post) => /* html */`
											<tr>
												<td class="px-6 py-4 whitespace-nowrap">
													<a>${post.id}</a>
											    </td>
												<td class="px-6 py-4 whitespace-nowrap">
													<a>${post.title}</a>
												</td>
												<td class="px-6 py-4 whitespace-nowrap">
												<a href="/news/${post.id}"><img src="${post.img}"
												class="w-64 h-48 transform hover: transition duration-500 hover:-translate-y-3 overflow-hidden" /></a>
												</td>
												<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<a href="/admin/news/edit/${post.id}"
														class="inline-block bg-indigo-500 text-while py-2 px-6 rounded text-white text-sm hover:text-indigo-900">Sửa</a>
													<button
														class="inline-block bg-indigo-500 text-while py-2 px-6 rounded text-white text-sm hover:text-indigo-900 mx-3">Xóa</button>
												</td>
											</tr>
											`).join("")}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`

	}
}
export default newsadmin