import instance from './instance';

export const getAll = () => {
	const url = "/categories";
	return instance.get(url);
}
export const getProductByCategory = (id) => {
	const url = `/categories/${id}/?_embed=products`;
	return instance.get(url);
}
export const add = (product) => {
	const url = `/categories`;
	return instance.post(url, product);
}
export const remove = (id) => {
	const url = `/categories/${id}`;
	return instance.delete(url);
}