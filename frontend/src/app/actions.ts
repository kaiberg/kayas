'use server'
import {redirect} from "next/navigation";

export async function createSecret(formData: FormData) {


    console.log(formData);
    if(formData.has('message')) {
        redirect('/checkout?id=4536')
    }
}