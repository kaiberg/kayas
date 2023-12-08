import React from "react";
import styles from './page.module.css'
import {createSecret} from "@/app/actions";
function CreateSecret() {
    return (
        <form action={createSecret}>
            <h1>Create</h1>

            <Wrapper>
                <label htmlFor={"password"}>password</label>
                <input className={styles.input} id={"password"} name={'password'} required={false}   />
            </Wrapper>

            <Wrapper>
                <label htmlFor={"maxReads"}>max reads</label>
                <input className={styles.input} id={"maxReads"} min={1} placeholder={1} max={9999} step={10} type={'number'} name={'maxReads'} required={false}   />
            </Wrapper>

            <Wrapper>
                <label htmlFor={"open"}>open date</label>
                <input className={styles.input} id={"open"} type={"datetime-local"} name={'open'} required={false}  />
            </Wrapper>

            <Wrapper>
                <label htmlFor={"expire"}>expiry date</label>
                <input className={styles.input} id={"expire"} type={"datetime-local"} name={'expire'} required={false}/>
            </Wrapper>

            <Wrapper>
                <label htmlFor={"message"}>message *</label>
                <textarea name={"message"} className={styles.input} id={"note"} rows={8} cols={10} required minLength={1} maxLength={4096} placeholder={'write your secret here...'}></textarea>
            </Wrapper>

            <button type={'submit'}>Create</button>
        </form>
    )
}

function Wrapper({children} : {children: React.ReactNode}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default CreateSecret;