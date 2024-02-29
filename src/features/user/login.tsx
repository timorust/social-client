import { Button, Link } from "@nextui-org/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {
  useLazyCurrentQuery,
  useLoginMutation,
} from "../../app/services/userApi"
import { ErrorMessage } from "../../components/error-message"
import { Input } from "../../input"
import { hasErrorField } from "../../utils/check-error-fields"

type LoginProps = {
  email: string
  password: string
}

type Props = {
  setSelected: (value: string) => void
}

export const Login: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [triggerCurrentQuery] = useLazyCurrentQuery()

  const onSubmit = async (data: LoginProps) => {
    try {
      await login(data).unwrap()
      await triggerCurrentQuery()
      navigate("/")
    } catch (error) {
      if (hasErrorField(error)) setError(error.data.error)
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="email"
        label="Email"
        type="email"
        required="Required"
      />
      <Input
        control={control}
        name="password"
        label="Password"
        type="password"
        required="Required"
      />
      <ErrorMessage error={error} />

      <p className="text-center text-small">
        No account?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("sign-up")}
        >
          Register
        </Link>
      </p>

      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Login
        </Button>
      </div>
    </form>
  )
}
