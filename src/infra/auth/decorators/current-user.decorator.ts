import { ExecutionContext, createParamDecorator } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  async (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    const user = request.user

    return user.sub
  },
)
