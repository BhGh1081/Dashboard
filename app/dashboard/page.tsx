import Card from "../ui/card";

export default function Dashboard() {


    return (
        <div className="h-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Card title="Orders" value={322435} prevValue={322546} type="order" />
                <Card title="User" value={3670} prevValue={2890} type="user" />
                <Card title="Custommer" value={2345} prevValue={2134} type="customer" />
                <Card title="Revenue" value={1234} prevValue={1365} type="revenue" />
                
            </div>
        </div>
    )
}