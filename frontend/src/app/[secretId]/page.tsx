import {getSecret} from "@/networking/API";

type ReadSecretProps = {
    params: { secretId: string }
}

export const dynamic = 'force-dynamic'

async function ReadSecret({params}: ReadSecretProps) {
    const {message} = await getSecret({identifier: params.secretId})

    return (
        <div>
            {message}
        </div>
    )
}

export default ReadSecret;