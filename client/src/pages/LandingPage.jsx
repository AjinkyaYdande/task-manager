import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className='main-section'>
                <div className='heading'>
                    <h1>Work flows here.</h1>
                    <h2>Organize, prioritize, and crush your goals.</h2>
                </div>
                <div className='landing-page-buttons'>
                    <Button
                        label="LOGIN"
                        className="btn-landing-page login-btn"
                        onClick={() => navigate('/login')}
                    />
                    <Button
                        label="REGISTER"
                        className="btn-landing-page register-btn"
                        onClick={() => navigate('/register')}
                    />
                </div>
                <div>
                    <p className="sub-description">
                        Manage your daily tasks efficiently
                    </p>
                </div>
                {/* --------------------------------------- LATER -------------------------------------------------------------- */}

                {/* <div className="flex-1 p-3 overflow-hidden">
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-prompt"
            // style="visibility: visible;"
            >&gt; blackbox agent run --task refactor-auth</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-text"
            // style="visibility: visible;"
            >[INIT] Loading codebase context...</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-text"
            // style="visibility: visible;"
            >[SCAN] 47 files analyzed in 1.2s</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-text"
            // style="visibility: visible;"
            >[PLAN] Extracting auth middleware → /lib/auth.ts</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-text"
            // style="visibility: visible;"
            >[EDIT] src/routes/api.ts — removed inline checks</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-text"
            // style="visibility: visible;"
            >[EDIT] src/middleware/auth.ts — created guard</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-terminal-text"
            // style="visibility: hidden;"
            >[TEST] 12/12 passing</div>
          <div data-line="true" className="text-[11px] font-mono leading-[1.7] whitespace-pre h-[19px] text-emerald-500/90"
            // style="visibility: hidden;"
            >[DONE] Refactor complete. PR ready.</div>
        </div> */}
            </section>
        </>
    )
}

export default LandingPage;