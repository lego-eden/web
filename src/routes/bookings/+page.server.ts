import { withAccess } from "$lib/utils/access";
import prisma from "$lib/utils/prisma";
import apiNames from "$lib/utils/apiNames";
import type { PageServerLoad } from "./$types";
import { getAllBookingRequests } from "./bookingrequests";
import type { Bookable } from "@prisma/client";
import { ObjectCreatedAll } from "minio";
import { fail } from "@sveltejs/kit";
import { getAllBookables } from "./bookables";

export const load: PageServerLoad = async ({ url }) => {
  const bookingRequests = await getAllBookingRequests();
  const bookables = await getAllBookables();
  return {bookingRequests, bookables};
}

export const actions = {
  default: async ({request, locals}) => {
    // const session = await locals.getSession();
    // return withAccess(apiNames.BOOKINGS.CREATE, session?.user, async () => {
    //   // read the form data sent by the browser
    //   const formData = await request.formData();
    //   let bookables: Bookable[];
    //   try {
    //     bookables = JSON.parse(String(formData.get("bookable")));
    //   } catch (e) {
    //     return fail(400, {
    //       error: "Invalid Bookable",
    //       data: Object.fromEntries(formData),
    //     });
    //   }
    //   try{
    //     await prisma.bookingRequest.create({
    //       data: {
    //         id: "id",
    //         bookerId: "id2",
    //         //bookables: bookables,
    //         // bookerId: {
    //         //   connect: {
    //         //     studentId: session?.user?.student_id,
    //         //   }
    //         // },
    //         start: formData.get("start") ? new Date(String(formData.get("start"))) : new Date(),
    //         end: formData.get("end") ? new Date(String(formData.get("end"))) : new Date(),
    //         // bookables: bookables,
    //         // status: "PENDING"
    //         }, 
    //       })
    //   } catch (e) {

    //   }

    // })
  }
}

