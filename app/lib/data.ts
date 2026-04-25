import { cartType } from '@/app/lib/definision';
import {z} from 'zod';

export function Authentication({email, password}: {email: string, password: string}) {

    const parseCredential = z.object({
        email: z.email({message: 'Invalid Mail'}),
        password: z.string().min(3, 'should not be less than 3 characters')
    }).safeParse({email: email, password: password})

    if(!parseCredential.success){
        return {error: parseCredential.error.flatten().fieldErrors}
    }

    //const res = await fetch('')
} 

export async function fetchCartsData() {

    try {
        const res = await fetch('https://dummyjson.com/carts', {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error('Faild to fetch carts')
        }

        const { carts } = await res.json();

        const totalOrders = carts.length;

        const totalRevenue = carts.length ? carts.reduce((sum: number, cart: cartType) => sum + cart.total, 0) : 0

        const uniqId = Array.from(new Map(carts.map((cart: cartType) => [cart.userId, cart])).values())
        const totalCustomers = uniqId.length


        return {
            totalOrders,
            totalCustomers,
            totalRevenue
        }

    } catch(err) {
        console.log('Database error',err)
    }

}

export async function fetchUsersData() {

    try {
        const res = await fetch('https://dummyjson.com/users', {
            next: { revalidate: 60 }
        })
        if (!res.ok) {
            throw new Error('Database error')
        }
        const users = await res.json();
        const totalUsers = users.lengh

        return totalUsers;
    } catch {
        console.log('Someting went wrong');
    }
}