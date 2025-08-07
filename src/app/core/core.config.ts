import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { EnvironmentProviders } from '@angular/core';
import { loggingInterceptor } from './interceptors/logging-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';

export const CORE_PROVIDERS: EnvironmentProviders[] = [
  provideHttpClient(
    withInterceptorsFromDi(),
    withInterceptors([loggingInterceptor, errorInterceptor])
  ),
];
