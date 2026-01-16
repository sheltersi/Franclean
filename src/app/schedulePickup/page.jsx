import SchedulePickupClient from "@/components/SchedulePickupClient";

export const metadata = {
         title:"Schedule Pickup | FreshLaundry",
         description:"Schedule a convenient laundry pickup. Choose your preferred date, time, and service type. Free pickup and delivery available."
    }

const SchedulePickup = () => {
    return (
        <SchedulePickupClient />
    )
}

export default SchedulePickup;
