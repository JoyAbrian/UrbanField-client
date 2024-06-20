import UserDataInput from "../../Elements/Input/UserDataInput";
import UserDocumentInput from "../../Elements/Input/UserDocumentInput";

const PaymentUserDetail = () => {
    return (
        <div className="w-1/2 shadow-lg shadow-slate-400 rounded-xl px-8 pb-5 mt-10">
            <div className="flex items-center">
                <img src="img/listIcon.png" alt="field" className="w-12 object-cover rounded-l-lg"/>
                <h1 className="ml-4 text-2xl font-Poppins font-semibold">Data Penyewa</h1>
            </div>
            <div className="w-full h-0 border-t border-dashed border-slate-400 mt-5"/>
            
            <UserDataInput name="Nama Lengkap" placeholder="John Doe"/>
            <div className="flex justify-between gap-4">
                <UserDataInput name="Nomor Handphone" placeholder="081234567890"/>
                <UserDataInput name="Email" placeholder="johndoe@email.com"/>
            </div>
            <UserDocumentInput />
        </div>
    )
}

export default PaymentUserDetail;