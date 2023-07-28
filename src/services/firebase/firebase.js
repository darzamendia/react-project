import { getFirestore, collection, addDoc, query, where, documentId, updateDoc, doc } from 'firebase/firestore';

export const firebaseServices = {
	createOrder: async (order) => {
		try {
			const db = getFirestore();
			const ordersCollection = collection(db, 'orders');
			const orderCreated = await addDoc(ordersCollection, order);
			return {
				id: orderCreated.id,
			};
		} catch (error) {
			return { error };
		}
	},
	createCart: async (cart) => {
		try {
			const db = getFirestore();
			const cartsCollection = collection(db, 'carts');
			const cartCreated = await addDoc(cartsCollection, cart);
			return {
				id: cartCreated.id,
			};
		} catch (error) {
			console.log(error);
			return { error };
		}
	},
	updateCart: async (cartId) => {
		try {
			const db = getFirestore();
			// Otra forma de realizar query
			// const q = query(collection(db, 'carts'), where(documentId, '==', cartId));
			// const cart = await q.get();
			const docRef = doc(db, 'carts', cartId);
			const data = {
				status: 'completed',
			};

			await updateDoc(docRef, data);
		} catch (error) {
			return { error };
		}
	},
	getCartById: async (cartId) => {
		try {
			const db = getFirestore();
			const docRef = doc(db, 'carts', cartId);
			const result = await getDoc(docRef);
			return result.data();
		} catch (error) {
			return { error };
		}
	},
};
