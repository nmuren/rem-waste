import { Box, CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import Layout from "./components/layout/Layout";
import { APP_ROUTES } from "./constants/appRoutes.ts";
import NotFound from "./pages/Error/NotFound.tsx";
import { store } from "./store/store.ts";
import { theme } from "./theme/theme.ts";

dayjs.extend(utc);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
            <Suspense
              fallback={
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
                  <CircularProgress />
                </Box>
              }
            >
              <Routes>
                {APP_ROUTES.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
      <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "top" }} />
    </ThemeProvider>
  </Provider>
);

export default App;
