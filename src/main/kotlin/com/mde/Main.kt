package com.mde

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLElement
import kotlin.js.Date

// Content definitions for our different pages
object Content {
    val home = """
        <div class="container pt-4">
            <h2>Welcome to Kotlin/JS Dashboard</h2>
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Quick Stats</div>
                        <div class="card-body">
                            <h5 class="card-title">Website Performance</h5>
                            <p class="card-text">Your website is performing well with 99.9% uptime this month.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">System Info</div>
                        <div class="card-body">
                            <h5 class="card-title">Server Status</h5>
                            <p class="card-text">All systems operational. Last updated: ${Date().toLocaleString()}</p>
                            <p class="card-text">Last login: Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    """
    
    val about = """
        <div class="container pt-4">
            <h2>About Our Dashboard</h2>
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Built with Kotlin/JS</h5>
                    <p class="card-text">This simple dashboard demonstrates how to create a Single Page Application using Kotlin/JS.</p>
                    <p>Key technologies used:</p>
                    <ul>
                        <li>Kotlin 1.5.31</li>
                        <li>Kotlin/JS</li>
                        <li>Bootstrap 5</li>
                        <li>Maven</li>
                    </ul>
                </div>
            </div>
        </div>
    """
}

class App {
    // Keep track of the current active page
    private var currentPage = "home"

    fun start() {
        // Initialize when the page loads
        window.onload = {
            setupNavigation()
            renderPage(currentPage)
        }
    }

    private fun setupNavigation() {
        // Get navigation elements by their IDs
        val homeNav = document.getElementById("nav-home")
        val aboutNav = document.getElementById("nav-about")

        // Add click handlers for navigation
        homeNav?.addEventListener("click", {
            it.preventDefault()
            navigateTo("home")
        })

        aboutNav?.addEventListener("click", {
            it.preventDefault()
            navigateTo("about")
        })
    }

    private fun navigateTo(page: String) {
        // Update current page
        currentPage = page

        // Update active class in navigation
        document.getElementById("nav-home")?.classList?.remove("active")
        document.getElementById("nav-about")?.classList?.remove("active")
        document.getElementById("nav-$page")?.classList?.add("active")

        // Render the new page content
        renderPage(page)
    }

    private fun renderPage(page: String) {
        val contentElement = document.getElementById("content") as HTMLElement

        // Set the appropriate content based on the page
        when (page) {
            "home" -> contentElement.innerHTML = Content.home
            "about" -> contentElement.innerHTML = Content.about
            else -> contentElement.innerHTML = Content.home
        }
    }
}

fun main() {
    // Start the application
    App().start()
}
