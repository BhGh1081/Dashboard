import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ShoppingBagIcon, UsersIcon, CurrencyDollarIcon, UserIcon } from "@heroicons/react/16/solid";
import { formatCurrency } from "../lib/formatted";


export default function Card({ title, value, prevValue, type }: 
    { title: string, value: number, prevValue: number, type: 'order' | 'customer' | 'revenue'| 'user' }) {

    const trend = value > prevValue;
    const present = (((value - prevValue)* 100) / prevValue).toFixed(2);

    const num = formatCurrency(value); 

    const iconMap = {
        order: ShoppingBagIcon,
        customer: UsersIcon,
        revenue: CurrencyDollarIcon,
        user: UserIcon
    }

    const Icon = iconMap[type]

    return (
        <div className="w-full border-solid border-2 border-black/20 rounded-lg p-4">
            <div className="flex gap-2">
                <Icon className="w-5 h-5 text-gray-400" />
                <p className="text-gray-400">Total {title}</p>
            </div>

            
            <div className="flex gap-1 items-end">
                <p className="font-bold text-[1.5rem]">{type === 'revenue' ? '$' + num : num}</p>    
                <ArrowTrendingDownIcon className={clsx('w-7 h-7 text-red-500', trend ? 'hidden' : 'block')} />
                <ArrowTrendingUpIcon className={clsx('w-7 h-7 text-green-500', trend ? 'block' : 'hidden')} />
                <p className={clsx('text-[.8rem]', trend ? 'text-green-500' : 'text-red-500')}>{present}%</p>
            </div>

        </div>
    )
}