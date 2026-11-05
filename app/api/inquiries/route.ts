import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    if (!name || !email || !message || !email.includes("@")) return NextResponse.json({error:"Please complete the required fields."},{status:400});
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return NextResponse.json({error:"Inquiry storage is not configured yet. Please email us directly at luciandemarco@gmail.com."},{status:503});
    const supabase = createClient(url,key,{auth:{persistSession:false}});
    const { error } = await supabase.from("inquiries").insert([{name,email,phone:String(body.phone ?? ""),service:String(body.service ?? ""),message,status:"new"}]);
    if (error) throw error;
    const resendKey=process.env.RESEND_API_KEY;
    if(resendKey){await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${resendKey}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.FROM_EMAIL ?? "GridMint Website <onboarding@resend.dev>",to:[process.env.INQUIRY_NOTIFICATION_EMAIL ?? "luciandemarco@gmail.com"],subject:"New GridMint project inquiry",text:`Name: ${name}\nEmail: ${email}\nPhone: ${body.phone ?? ""}\nService: ${body.service ?? ""}\n\n${message}`})});}
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({error:"We couldn't submit that inquiry. Please email us directly."},{status:500}); }
}