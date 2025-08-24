export type Email = {
	to: string[]
	subject: string
	body: string
}

export async function sendEmail(message: Email): Promise<{ ok: boolean }>
{
	console.log('Sending email:', message)
	await new Promise(r => setTimeout(r, 300))
	return { ok: true }
}