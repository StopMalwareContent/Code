FROM node:22

# Install system dependencies
RUN apt-get update && apt-get install -y \
    # Git for version control
    git \
    # Python for node-gyp and other build tools
    python3 \
    python3-pip \
    build-essential \
    # Curl for downloading tools
    curl \
    wget \
    unzip \
    # Tools for Chrome extension development
    chromium \
    # Firefox for extension testing
    firefox-esr \
    # Additional utilities
    jq \
    vim \
    nano \
    && rm -rf /var/lib/apt/lists/*

# Set up Chrome extension development environment
RUN mkdir -p /opt/chrome-extensions
ENV CHROME_BIN=/usr/bin/chromium
ENV DISPLAY=:99

# Install Chrome extension development tools
RUN pnpm install -g chrome-webstore-upload-cli

# Set working directory
WORKDIR /workspace

# Install root dependencies
RUN pnpm install

# Set up Firefox profile for extension development
RUN mkdir -p /tmp/firefox-profile
ENV MOZ_DISABLE_CONTENT_SANDBOX=1

# Create development scripts directory
RUN mkdir -p /workspace/.devcontainer/scripts

# Expose development ports
EXPOSE 4321 3000

# Set environment variables
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

# Create a non-root user for VS Code
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Give the vscode user ownership of the workspace
RUN chown -R $USERNAME:$USERNAME /workspace

USER $USERNAME

# Set the default command
CMD ["bash"]