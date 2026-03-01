import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import loginImage from "@/assets/LoginPage.png"
import {
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import api from "@/config/api"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { loginSuccess } from "@/redux/features/auth/authSlice"

export function LoginPage({ className, ...props }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error("Please fill all fields")
      return
    }

    try {
      setLoading(true)

      const { data } = await api.post(
        "/users/login",
        { email: email.trim(), password }
      )

      if (!data?.data?.accessToken) {
        toast.error("Invalid login response")
        return
      }

      // ✅ Dispatch to Redux
      dispatch(
        loginSuccess({
          user: data.data.user,
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        })
      )

      toast.success("Login successful 🎉")
      if(data.data.user.role === "admin") {
        navigate("/admin/dashboard")
      } else {

      navigate("/")
      }

    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Login failed. Please try again."

      toast.error(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div
        className={cn(
          "flex flex-col gap-6 w-full max-w-5xl px-4",
          className
        )}
        {...props}
      >
        <Card className="overflow-hidden p-0 shadow-xl">
          <CardContent className="grid p-0 md:grid-cols-2">

            {/* FORM */}
            <form
              onSubmit={handleLogin}
              className="p-6 md:p-8"
            >
              <FieldGroup className="space-y-6">

                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">
                    Welcome back
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Login to your Kartiko account
                  </p>
                </div>

                {/* EMAIL */}
                <div>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>
                    <Link
                      to="/forgot-password"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* BUTTON */}
                <Button
                  type="submit"
                  className="w-full btn-gradient rounded-xl"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>

                <FieldDescription className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/signup"
                    className="underline hover:text-primary"
                  >
                    Sign up
                  </Link>
                </FieldDescription>

              </FieldGroup>
            </form>

            {/* IMAGE */}
            <div className="relative hidden md:block bg-muted">
              <img
                src={loginImage}
                alt="Login visual"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
              />
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}