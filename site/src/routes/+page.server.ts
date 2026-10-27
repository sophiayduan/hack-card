import type { Actions } from './$types';
import { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID} from '$env/static/private'


const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const actions = {
  register: async (event) => {
    const emailData = await event.request.formData();
    const email = String(emailData.get('email')).trim().toLowerCase();

    if (regex.test(email) == false){
      // console.log("you fucked up");
      return;
    }
    else {
      await postEmail(email);
    }
  }
} satisfies Actions;

async function postEmail(email: string) {
  const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fields: { email },
      typecast: true,

    })

  });
  const data = await response.json();
  console.log(data);
}
